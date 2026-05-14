/**
 * Generated Tool: workspacesTool_0021
 * Domain: Workspaces
 * ID: 0021
 */
exports.workspacesTool_0021 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0021:', error);
    throw error;
  }
};
