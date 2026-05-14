/**
 * Generated Tool: workspacesTool_0348
 * Domain: Workspaces
 * ID: 0348
 */
exports.workspacesTool_0348 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0348:', error);
    throw error;
  }
};
