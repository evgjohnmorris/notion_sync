/**
 * Generated Tool: workspacesTool_0266
 * Domain: Workspaces
 * ID: 0266
 */
exports.workspacesTool_0266 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0266:', error);
    throw error;
  }
};
