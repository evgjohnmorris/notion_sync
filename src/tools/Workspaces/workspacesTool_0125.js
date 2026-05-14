/**
 * Generated Tool: workspacesTool_0125
 * Domain: Workspaces
 * ID: 0125
 */
exports.workspacesTool_0125 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0125:', error);
    throw error;
  }
};
