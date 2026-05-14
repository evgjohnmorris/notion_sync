/**
 * Generated Tool: workspacesTool_0297
 * Domain: Workspaces
 * ID: 0297
 */
exports.workspacesTool_0297 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0297:', error);
    throw error;
  }
};
