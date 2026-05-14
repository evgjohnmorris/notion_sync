/**
 * Generated Tool: workspacesTool_0360
 * Domain: Workspaces
 * ID: 0360
 */
exports.workspacesTool_0360 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0360:', error);
    throw error;
  }
};
