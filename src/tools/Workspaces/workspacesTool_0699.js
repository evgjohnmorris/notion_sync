/**
 * Generated Tool: workspacesTool_0699
 * Domain: Workspaces
 * ID: 0699
 */
exports.workspacesTool_0699 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0699:', error);
    throw error;
  }
};
