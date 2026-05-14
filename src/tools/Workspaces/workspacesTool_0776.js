/**
 * Generated Tool: workspacesTool_0776
 * Domain: Workspaces
 * ID: 0776
 */
exports.workspacesTool_0776 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0776:', error);
    throw error;
  }
};
