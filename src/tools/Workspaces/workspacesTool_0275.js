/**
 * Generated Tool: workspacesTool_0275
 * Domain: Workspaces
 * ID: 0275
 */
exports.workspacesTool_0275 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0275:', error);
    throw error;
  }
};
