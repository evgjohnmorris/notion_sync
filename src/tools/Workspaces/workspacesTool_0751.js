/**
 * Generated Tool: workspacesTool_0751
 * Domain: Workspaces
 * ID: 0751
 */
exports.workspacesTool_0751 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0751:', error);
    throw error;
  }
};
