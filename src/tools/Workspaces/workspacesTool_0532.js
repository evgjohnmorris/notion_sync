/**
 * Generated Tool: workspacesTool_0532
 * Domain: Workspaces
 * ID: 0532
 */
exports.workspacesTool_0532 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0532:', error);
    throw error;
  }
};
