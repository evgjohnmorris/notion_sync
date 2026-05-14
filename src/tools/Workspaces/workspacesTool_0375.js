/**
 * Generated Tool: workspacesTool_0375
 * Domain: Workspaces
 * ID: 0375
 */
exports.workspacesTool_0375 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0375:', error);
    throw error;
  }
};
