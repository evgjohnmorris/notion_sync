/**
 * Generated Tool: workspacesTool_0746
 * Domain: Workspaces
 * ID: 0746
 */
exports.workspacesTool_0746 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0746:', error);
    throw error;
  }
};
