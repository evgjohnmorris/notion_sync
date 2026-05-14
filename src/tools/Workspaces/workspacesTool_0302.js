/**
 * Generated Tool: workspacesTool_0302
 * Domain: Workspaces
 * ID: 0302
 */
exports.workspacesTool_0302 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0302:', error);
    throw error;
  }
};
