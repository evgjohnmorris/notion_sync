/**
 * Generated Tool: databasesTool_0521
 * Domain: Databases
 * ID: 0521
 */
exports.databasesTool_0521 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0521:', error);
    throw error;
  }
};
