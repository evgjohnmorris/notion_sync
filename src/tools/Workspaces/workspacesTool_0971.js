/**
 * Generated Tool: workspacesTool_0971
 * Domain: Workspaces
 * ID: 0971
 */
exports.workspacesTool_0971 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0971:', error);
    throw error;
  }
};
