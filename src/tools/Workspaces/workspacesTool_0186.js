/**
 * Generated Tool: workspacesTool_0186
 * Domain: Workspaces
 * ID: 0186
 */
exports.workspacesTool_0186 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0186:', error);
    throw error;
  }
};
