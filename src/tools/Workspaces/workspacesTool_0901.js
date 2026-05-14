/**
 * Generated Tool: workspacesTool_0901
 * Domain: Workspaces
 * ID: 0901
 */
exports.workspacesTool_0901 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0901:', error);
    throw error;
  }
};
