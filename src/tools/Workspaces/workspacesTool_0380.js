/**
 * Generated Tool: workspacesTool_0380
 * Domain: Workspaces
 * ID: 0380
 */
exports.workspacesTool_0380 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0380:', error);
    throw error;
  }
};
