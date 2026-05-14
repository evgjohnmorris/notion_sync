/**
 * Generated Tool: workspacesTool_0726
 * Domain: Workspaces
 * ID: 0726
 */
exports.workspacesTool_0726 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0726:', error);
    throw error;
  }
};
