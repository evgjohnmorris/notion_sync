/**
 * Generated Tool: workspacesTool_0272
 * Domain: Workspaces
 * ID: 0272
 */
exports.workspacesTool_0272 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0272:', error);
    throw error;
  }
};
