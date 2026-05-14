/**
 * Generated Tool: workspacesTool_0033
 * Domain: Workspaces
 * ID: 0033
 */
exports.workspacesTool_0033 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0033:', error);
    throw error;
  }
};
