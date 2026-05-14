/**
 * Generated Tool: workspacesTool_0411
 * Domain: Workspaces
 * ID: 0411
 */
exports.workspacesTool_0411 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0411:', error);
    throw error;
  }
};
