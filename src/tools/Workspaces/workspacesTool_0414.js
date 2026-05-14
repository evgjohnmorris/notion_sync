/**
 * Generated Tool: workspacesTool_0414
 * Domain: Workspaces
 * ID: 0414
 */
exports.workspacesTool_0414 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0414:', error);
    throw error;
  }
};
