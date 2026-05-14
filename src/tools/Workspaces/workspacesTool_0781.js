/**
 * Generated Tool: workspacesTool_0781
 * Domain: Workspaces
 * ID: 0781
 */
exports.workspacesTool_0781 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0781:', error);
    throw error;
  }
};
