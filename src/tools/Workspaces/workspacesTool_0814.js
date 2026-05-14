/**
 * Generated Tool: workspacesTool_0814
 * Domain: Workspaces
 * ID: 0814
 */
exports.workspacesTool_0814 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0814:', error);
    throw error;
  }
};
