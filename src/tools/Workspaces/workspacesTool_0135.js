/**
 * Generated Tool: workspacesTool_0135
 * Domain: Workspaces
 * ID: 0135
 */
exports.workspacesTool_0135 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0135:', error);
    throw error;
  }
};
