/**
 * Generated Tool: workspacesTool_0763
 * Domain: Workspaces
 * ID: 0763
 */
exports.workspacesTool_0763 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0763:', error);
    throw error;
  }
};
