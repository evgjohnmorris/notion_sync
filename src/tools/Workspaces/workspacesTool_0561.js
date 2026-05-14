/**
 * Generated Tool: workspacesTool_0561
 * Domain: Workspaces
 * ID: 0561
 */
exports.workspacesTool_0561 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0561:', error);
    throw error;
  }
};
