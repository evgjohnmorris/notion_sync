/**
 * Generated Tool: workspacesTool_0888
 * Domain: Workspaces
 * ID: 0888
 */
exports.workspacesTool_0888 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0888:', error);
    throw error;
  }
};
