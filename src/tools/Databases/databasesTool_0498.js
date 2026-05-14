/**
 * Generated Tool: databasesTool_0498
 * Domain: Databases
 * ID: 0498
 */
exports.databasesTool_0498 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0498:', error);
    throw error;
  }
};
