/**
 * Generated Tool: workspacesTool_0129
 * Domain: Workspaces
 * ID: 0129
 */
exports.workspacesTool_0129 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0129:', error);
    throw error;
  }
};
