/**
 * Generated Tool: workspacesTool_0046
 * Domain: Workspaces
 * ID: 0046
 */
exports.workspacesTool_0046 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0046:', error);
    throw error;
  }
};
