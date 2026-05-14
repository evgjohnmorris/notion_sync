/**
 * Generated Tool: workspacesTool_0496
 * Domain: Workspaces
 * ID: 0496
 */
exports.workspacesTool_0496 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0496:', error);
    throw error;
  }
};
