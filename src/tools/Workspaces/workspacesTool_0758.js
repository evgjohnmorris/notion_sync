/**
 * Generated Tool: workspacesTool_0758
 * Domain: Workspaces
 * ID: 0758
 */
exports.workspacesTool_0758 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0758:', error);
    throw error;
  }
};
