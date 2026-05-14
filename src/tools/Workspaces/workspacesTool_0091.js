/**
 * Generated Tool: workspacesTool_0091
 * Domain: Workspaces
 * ID: 0091
 */
exports.workspacesTool_0091 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0091:', error);
    throw error;
  }
};
