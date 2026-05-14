/**
 * Generated Tool: workspacesTool_0998
 * Domain: Workspaces
 * ID: 0998
 */
exports.workspacesTool_0998 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0998:', error);
    throw error;
  }
};
