/**
 * Generated Tool: workspacesTool_0249
 * Domain: Workspaces
 * ID: 0249
 */
exports.workspacesTool_0249 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0249:', error);
    throw error;
  }
};
