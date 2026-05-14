/**
 * Generated Tool: workspacesTool_0899
 * Domain: Workspaces
 * ID: 0899
 */
exports.workspacesTool_0899 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0899:', error);
    throw error;
  }
};
