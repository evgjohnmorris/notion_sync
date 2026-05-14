/**
 * Generated Tool: workspacesTool_0771
 * Domain: Workspaces
 * ID: 0771
 */
exports.workspacesTool_0771 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0771:', error);
    throw error;
  }
};
