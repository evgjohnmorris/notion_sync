/**
 * Generated Tool: workspacesTool_0130
 * Domain: Workspaces
 * ID: 0130
 */
exports.workspacesTool_0130 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0130:', error);
    throw error;
  }
};
