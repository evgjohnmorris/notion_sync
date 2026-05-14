/**
 * Generated Tool: workspacesTool_0498
 * Domain: Workspaces
 * ID: 0498
 */
exports.workspacesTool_0498 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0498:', error);
    throw error;
  }
};
