/**
 * Generated Tool: databasesTool_0374
 * Domain: Databases
 * ID: 0374
 */
exports.databasesTool_0374 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0374:', error);
    throw error;
  }
};
