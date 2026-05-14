/**
 * Generated Tool: workspacesTool_0595
 * Domain: Workspaces
 * ID: 0595
 */
exports.workspacesTool_0595 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0595:', error);
    throw error;
  }
};
