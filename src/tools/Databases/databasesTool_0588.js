/**
 * Generated Tool: databasesTool_0588
 * Domain: Databases
 * ID: 0588
 */
exports.databasesTool_0588 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0588:', error);
    throw error;
  }
};
