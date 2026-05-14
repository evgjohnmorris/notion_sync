/**
 * Generated Tool: workspacesTool_0527
 * Domain: Workspaces
 * ID: 0527
 */
exports.workspacesTool_0527 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0527:', error);
    throw error;
  }
};
