/**
 * Generated Tool: workspacesTool_0466
 * Domain: Workspaces
 * ID: 0466
 */
exports.workspacesTool_0466 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0466:', error);
    throw error;
  }
};
