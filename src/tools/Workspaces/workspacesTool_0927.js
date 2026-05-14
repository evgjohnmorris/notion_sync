/**
 * Generated Tool: workspacesTool_0927
 * Domain: Workspaces
 * ID: 0927
 */
exports.workspacesTool_0927 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0927:', error);
    throw error;
  }
};
