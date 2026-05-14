/**
 * Generated Tool: workspacesTool_0869
 * Domain: Workspaces
 * ID: 0869
 */
exports.workspacesTool_0869 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0869:', error);
    throw error;
  }
};
