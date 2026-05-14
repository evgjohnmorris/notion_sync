/**
 * Generated Tool: workspacesTool_0254
 * Domain: Workspaces
 * ID: 0254
 */
exports.workspacesTool_0254 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0254:', error);
    throw error;
  }
};
