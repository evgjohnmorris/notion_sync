/**
 * Generated Tool: workspacesTool_0490
 * Domain: Workspaces
 * ID: 0490
 */
exports.workspacesTool_0490 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0490:', error);
    throw error;
  }
};
