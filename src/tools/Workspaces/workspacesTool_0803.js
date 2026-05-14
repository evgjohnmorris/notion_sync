/**
 * Generated Tool: workspacesTool_0803
 * Domain: Workspaces
 * ID: 0803
 */
exports.workspacesTool_0803 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0803:', error);
    throw error;
  }
};
