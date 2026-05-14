/**
 * Generated Tool: databasesTool_0576
 * Domain: Databases
 * ID: 0576
 */
exports.databasesTool_0576 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0576:', error);
    throw error;
  }
};
