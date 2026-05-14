/**
 * Generated Tool: workspacesTool_0421
 * Domain: Workspaces
 * ID: 0421
 */
exports.workspacesTool_0421 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0421:', error);
    throw error;
  }
};
